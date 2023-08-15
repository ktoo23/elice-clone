// show Tab content
function showContent(e) {
    let tabClassName = e.target.parentElement.className.split(' ')[0];
    // tab 제목
    document.querySelectorAll('.tabs > div').forEach(function(item) {
        let value = item.classList.value;
        if (value.includes('active')) {
            item.classList.remove('active');
        }
    });

    document.querySelector(`.${tabClassName}`).classList.add('active');

    // 해당 탭 콘텐츠 보여줌
    document.querySelectorAll('.tabs-item > div').forEach(function(item) {
        if (item.classList.value.includes('show')) {
            item.classList.remove('show');
        }
    });
    
    let tab = document.querySelector(`.${tabClassName}-contents`);
    tab.classList.add('show');
}

// move scroll sub-title content
let tabs = document.querySelectorAll('.tabs > div p');
tabs.forEach((e) => e.addEventListener('click', showContent));

function moveTo() {
    let scrollTo = document.querySelector(`.${this.id}`);
    window.scrollTo({
        'behavior': 'smooth',
        'top': scrollTo.offsetTop,
    });
}

let subTitles = document.querySelectorAll('.sub-title > p');
subTitles.forEach((e) => e.addEventListener('click', moveTo));


  