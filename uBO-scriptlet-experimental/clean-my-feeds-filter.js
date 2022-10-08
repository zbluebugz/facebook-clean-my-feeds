/// clean-my-feeds-filter.js
/// alias cmfs.js
(function () {
    var target = '{{1}}'; 
	var searchExpr = '{{2}}';
	var replaceText = '{{3}}';
    
    const start = () => {
        console.info(`---cmfs-scriptlet :: target: ${target}; searchExpr: ${searchExpr}; replaceText: ${replaceText}`);
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start, { once: true });
    } else {
        start();
    }
})();
