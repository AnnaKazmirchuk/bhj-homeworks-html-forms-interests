const interestsMain = document.querySelector('.interests_main');
const interests = interestsMain.querySelector('ul').children;

for (const interest of Array.from(interests)) {

    const interestCheck = interest.querySelector('.interest__check');
    const interestsActive = interest.querySelector('.interests_active');
    const checkActive = Array.from(interestsActive.querySelectorAll('.interest__check'));

    interestCheck.addEventListener('change', function() {
        for (let active of checkActive) {
            if (interestCheck.checked) {
                active.checked = true;
            } else {
                active.checked = false;
            }
        }
    });
}