var listItems = document.querySelectorAll('#reasons-list li');

listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        this.classList.toggle('selected');
    });
});
