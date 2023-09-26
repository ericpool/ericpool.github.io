
(function ($) {

    // fetch('data.json')
    //     .then((response) => response.json())
    //     .then((json) => {
    //         let parsed = json.result;
    //         console.log(parsed);


    let parsed = JSON.parse(`
    {
        "result": [
            [
                29538,
                {
                    "actual": [
                        "paulo",
                        "paulus",
                        "pauli",
                        "paulum"
                    ],
                    "count": 420,
                    "roots": [
                        "paul",
                        "paul"
                    ],
                    "senses": [
                        "Paul"
                    ],
                    "word_type": "Noun"
                }
            ],
            [
                412,
                {
                    "actual": [
                        "accipimus",
                        "accepta",
                        "accepissemus",
                        "accepimus",
                        "accipiens",
                        "accipi",
                        "accipitur",
                        "accipiat",
                        "accipere",
                        "accipiant",
                        "accipite",
                        "acceperunt",
                        "acciperemus",
                        "accipit",
                        "accipiamus",
                        "accipiebant",
                        "accipientis",
                        "accepto",
                        "accepti",
                        "acceptos",
                        "accipiatur",
                        "acceptum",
                        "accepisse",
                        "acceperant",
                        "accipiendam",
                        "accipiet",
                        "accipiunt",
                        "accipientes",
                        "accipienda",
                        "accipiantur",
                        "acceptis",
                        "acceptae",
                        "accepissent",
                        "accepit",
                        "acceptas",
                        "accipias",
                        "accipient",
                        "acceptus",
                        "acceptorum",
                        "acceperit",
                        "acceperint",
                        "accepturus",
                        "accipiendum",
                        "acceperimus",
                        "accepissem",
                        "accepisti",
                        "acceperis",
                        "acceptam",
                        "accipiuntur",
                        "acceptaque",
                        "acceperat",
                        "acciperent",
                        "accipientibus",
                        "accepi"
                    ],
                    "count": 404,
                    "roots": [
                        "accipi",
                        "accip",
                        "accep",
                        "accept"
                    ],
                    "senses": [
                        "take, grasp, receive, accept, undertake",
                        "admit, let in, hear, learn",
                        "obey"
                    ],
                    "word_type": ["Verb", "Adverb"]
                }
            ]
        ]
    }
    `).result


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
        // });

        $(document).on('click', '.show-modal-custom', function(){
            const element = document.getElementById('modal-wrapper')
            var myModal = new bootstrap.Modal(element, {
                keyboard: false
            })

            let words = this.dataset.words;

            words = words.replaceAll(',', ',<br>')

            element.querySelector('.modal-body').innerHTML = words

            myModal.show()
        })

})(jQuery)