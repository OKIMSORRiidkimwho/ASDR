document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.collapsible-section');

    sections.forEach(section => {
        const button = section.querySelector('.toggle-button');
        const content = section.querySelector('.collapsible-content');

        // 初始设置为折叠状态
        content.classList.add('expanded');

        // 点击按钮切换展开/收起状态
        button.addEventListener('click', function () {
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                content.classList.add('expanded'); // 展开时增加高度
                button.textContent = '∧'; // 收起箭头
            } else {
                content.classList.remove('expanded');
                content.classList.add('hidden'); // 折叠时隐藏内容
                button.textContent = '∨'; // 展开箭头
            }
        });
    });
});