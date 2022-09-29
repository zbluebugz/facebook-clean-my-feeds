(function () {

    // - pattern for finding sponsored text - no numbers in text (with 2 exceptions - "1 hour" in hebrew and malaylam)
    const pattern = /([0-9]|[\u0660-\u0669]|שעה אחת|ഒരു മണിക്കൂർ|^$)/;

    // post highlight
    const highlight = ':style(border:5px dotted pink !important; width:66% !important;)';
    const postContainer = 'span[id="ssrb_feed_start"] ~ div > div';
    const upward = ':upward(span[id="ssrb_feed_start"] ~ div > div)';

    // -- try various methods ..

    // -- try shadow root method:
    // - get collection of shadow-root's reference elements
    let elementsSVGText = Array.from(document.querySelectorAll('div > svg > text[id]'));
    if (elementsSVGText.length > 0) {

        // - filter for uBO:
        const filterComment = '! FB - sponsored text (Sept 2022)\n';
        const filterBegin = `facebook.com##${postContainer} > div:not([class]) span[id] > span > span > a[href="#"] span > span:has(:scope > svg > use[*|href]:not([href])):matches-css(width:/^(`;
        const filterEnd = `)(\.|p)/i)${upward}${highlight}`;

        // - collection of widths for sponsored text
        let arWidths = [];

        // - look for the sponsored text and get the widths
        elementsSVGText.forEach((el) => {
            if (el.textContent.length > 0) {
                // - have some text, grab it
                let daText = el.textContent;
                // - fb sometimes use ASCII code 160 for whitespace ... and trim it
                daText = daText.replaceAll(String.fromCharCode(160), String.fromCharCode(32)).trim();
                // - see if is sponsored (based on text not having a number - will get the odd false positive - e.g. "just now")
                //let 
                if (!pattern.test(daText)) {
                    // - found sponsored (with 99% confidence)
                    let elPostSVGUse = document.querySelector(`span[id] > span > span > a[href] span > span > svg > use[*|href="#${el.id}"]:not([href])`);
                    if (elPostSVGUse) {
                        // get width of the USE's grand parent element
                        let bcr = elPostSVGUse.closest('span').getBoundingClientRect();
                        let intWidth = parseInt(bcr.width, 10); // rounds down
                        let roundWidth = Math.round(bcr.width); // rounds up/down
                        // console.info('----***:', daText, bcr.width, intWidth, roundWidth, elPostSVGUse);
                        if (intWidth > 0) {
                            arWidths.push(intWidth);
                            arWidths.push(roundWidth);
                        }
                    }
                }
            }
        });
        if (arWidths.length > 0) {
            // have some widths, let add some buffer numbers
            arWidths.sort();
            let arWidthsRange = []
            arWidths.forEach((n) => {
                arWidthsRange.push(n, n - 2, n - 1, n + 1, n + 2);
            });
            arWidthsRange.sort();
            // console.info('--- ::', arWidthsRange);
            let uniqueWidths = [...new Set(arWidthsRange)];
            uniqueWidths.sort((a, b) => a - b);
            // console.info('----:: unique:', uniqueWidths);

            console.clear();
            console.info('Copy the following lines for the "Sponsored" filter for use in uBO:\n', filterComment + filterBegin + uniqueWidths.join('|') + filterEnd);
        }
        else {
            console.clear();
            console.info('--- Unable to create a "Sponsored" filter for use in uBO. Are you sure that at least Sponsored Post is visible?');
        }
    }
    else {

        // - simple / non-abfuscated
        let elements = Array.from(document.querySelectorAll(postContainer + 'span > span > span > a[href="#"] > span, span > span > span > a[href*="/ads/"] > span'));
        if (elements.length > 0) {
            const filterComment = '! FB - sponsored text (non-obfuscated)\n';
            const filter1 = `facebook.com##${postContainer} > div:not([class]) span > span > span > a[href="#"] > span${upward}${highlight}`;
            const filter2 = `facebook.com##${postContainer} > div:not([class]) span > span > span > a[href*="/ads/"] > span${upward}${highlight}`;
            console.clear();
            console.info('Copy the following lines for the "Sponsored" filter for use in uBO:\n' + filterComment + filter1 + '\n' + filter2);
        }
        else {
            console.clear();
            console.info('--- Unable to create a "Sponsored" filter for use in uBO. Are you sure that at least Sponsored Post is visible?');
        }
    }
})();
