

 




const menu = {
    init: function () {
      this.clickshowform('.btnAdd','.form', 'showform', '.overlay', 'showover', '.form-add', 'showzindex');
      this.clickcloseform('#cancel', '.form', 'showform', '.overlay', 'showover', '.form-add', 'showzindex');
    },
    clickshowform: function (btn1,form, togleclass, acoverlay, over, form1, zindex) {
      let button1 = document.querySelector(btn1);
      let formacticve = document.querySelector(form);
      let overx = document.querySelector(acoverlay);
      let formxx = document.querySelector(form1);
      
  
      button1.addEventListener('click', () => {
        formacticve.classList.add(togleclass);
        overx.classList.add(over);
        formxx.classList.add(zindex);
      });
    
    
    },
  
    clickcloseform: function (btnc, form, removeclass, over, ax, fomr1, zindex) {
      let btn = document.querySelector(btnc);
      let formac = document.querySelector(form);
      let ovexx = document.querySelector(over);
      let formxx = document.querySelector(fomr1)
      btn.addEventListener('click', () => {
        formac.classList.remove(removeclass);
        ovexx.classList.remove(ax);
        formxx.classList.remove(zindex);
  
      });
    },
   
  }
  menu.init();