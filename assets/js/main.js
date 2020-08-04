const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');


// Select Tab Content Item

function selectItem(e){
    removeBorder()
    removeShow();
    // Add Border To Current Tab
    this.classList.add('tabs-border');
    // Grab Content item From Dom
    const tabSelector  = document.querySelector(`#${this.id}-content`);
    // Add Show Class
    tabSelector.classList.add('show','animate__animated','animate__fadeIn');
}
function removeBorder(){
    tabItems.forEach(items => items.classList.remove('tabs-border'));
}
function removeShow(){
    tabContentItems.forEach(items => items.classList.remove('show'));
}

// Listener On Click listener on tab
tabItems.forEach(items => items.addEventListener('click',selectItem));