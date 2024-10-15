
        function fetchTxtContent() {
            fetch('counter.txt') // 替换为你的txt文件URL
            .then(response => response.text())
            .then(text => {
                document.getElementById('txtContent').innerHTML = text;
            })
            .catch(error => {
                console.error('Error fetching txt content:', error);
                document.getElementById('txtContent').innerHTML = '内容加载失败';
            });
        }
 
        // 当页面加载完成时获取内容
        window.onload =fetchTxtContent;