
(function ($) {

    fetch('data.json')
        .then((response) => response.json())
        .then((json) => {
            let parsed = json.result;
            console.log(parsed);

            rows = ``;
            for (const item of parsed) {
                const value = item[1];
                const root = value.roots.join(', ');
                const senses = value.senses.join('; ');
                let word_type = value.word_type;
                

                if(typeof word_type === 'object'){
                    word_type = word_type.join('; ');
                }

                rows += `
            <tr>
                <td class="word-count">${value.count}</td>
                <td>${root}</td>
                <td>${senses}</td>
                <td>${word_type}</td>
                <td><a class="show-modal-custom" data-words="${value.actual}" href="#">Actual</a></td>
            </tr>
            `
            }

            let body = document.getElementById('table-wrapper');

            table = `
            
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Count</th>
                            <th scope="col">Word</th>
                            <th scope="col">Definition</th>
                            <th scope="col">Word Type</th>
                            <th scope="col">Actual</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            
                `


            body.innerHTML = table
        });

        $(document).on('click', '.show-modal-custom', function(){
            const element = document.getElementById('modal-wrapper')
            var myModal = new bootstrap.Modal(element)

            let words = this.dataset.words;

            words = words.replaceAll(',', ',<br>')

            element.querySelector('.modal-body').innerHTML = words

            myModal.show()
        })

})(jQuery)