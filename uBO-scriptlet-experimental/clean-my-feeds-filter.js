/// clean-my-feeds-filter.js
/// alias cmfs.js
(function () {
    	let target = '{{1}}'; 
	let searchExpr = '{{2}}';
	let replaceText = '{{3}}';
    
    	const start = () => {
        	console.info(`---cmfs-scriptlet :: target: ${target}; searchExpr: ${searchExpr}; replaceText: ${replaceText}`);
    	};

	if (document.readyState === 'loading') {
        	document.addEventListener('DOMContentLoaded', start, { once: true });
    	} else {
        	start();
    	}
})();
