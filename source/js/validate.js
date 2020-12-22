const selector = document.querySelector(".contact__input-tel");

const im = new Inputmask("8 (999) 999 99 99");
im.mask(selector);


    new JustValidate('.contact__form', {
      rules: {
        name: {
          required: true,
          minLength: 2,
          maxLength: 10
        },
        tel: {
          required: true,
          function: (name, value) => {
            const phone = selector.inputmask.unmaskedvalue();
            return Number(phone) && phone.length === 10;
          }
        },
        mail: {
          required: true,
          email: true
        }
      }
    })
