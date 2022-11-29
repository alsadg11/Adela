        const name = document.getElementById('name')
        const password = document.getElementById('password')
        const form = document.getElementById('form')
        const error = document.getElementById('error')

        form._addEventListener('submit' , (e) => {

            let message = []
            if (name.value === '' || name.value == null || name.value !=== 'administretor') {
                message.push('wrong username')
        }

        if (password.value.length <= 3) {

            message.push('Password must be longer then 3 characters')
        }

        if (password.value.length >= 10) {

            message.push('Password must be less then 10 characters')
        }

        if (password.value !=='admin'){

            message.push('Password is wrong')
        }
            
            if (message.length > 0){

                e.preventDefault()
                errorelement.innerText = message.join(', ')

            }







            type="submit"
