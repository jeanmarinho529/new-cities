const list = document.querySelectorAll('.list');

function activeLink() {
    list.forEach((item) => item.classList.remove('active'));
    this.classList.add('active');
}


list.forEach((item) => item.addEventListener('click', activeLink))


const formControlsElements = document.querySelectorAll('.form-control')

for (let control of formControlsElements) {

    const controlInputElement = control.children[1]

    controlInputElement.addEventListener('keyup', event => {

        if (event.target.checkValidity()) {

            control.classList.remove('error')

        } else {

            control.classList.add('error')

        }

    })

}