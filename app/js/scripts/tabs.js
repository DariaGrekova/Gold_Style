export function tabs() {
  const tabsItems = document.querySelectorAll('.js-tabs');
  const tabsContentItems = document.querySelectorAll('.js-tab-content');

  if (tabsItems.length > 0) {
    tabsContentItems[0].classList.add('_active');

    tabsItems.forEach((item) => {
      const tabsButtons = item.querySelectorAll('.js-tab-btn');
      tabsButtons[0].classList.add('_active')

      for(let i = 0; i < tabsButtons.length; i++) {

        tabsButtons[i].addEventListener('click', (e) => {
          e.preventDefault();

          for(let i = 0; i < tabsButtons.length; i++) {
            tabsButtons[i].classList.remove('_active');
          }
          tabsButtons[i].classList.add('_active');

          const tabName = tabsButtons[i].getAttribute('data-tab');

          tabsContentItems.forEach((item) => {
            item.classList.remove('_active');

            const contentName = item.getAttribute('id');
            if(contentName === tabName) {
              item.classList.add('_active');
            }
          })
        })
      }
    })
  }
}