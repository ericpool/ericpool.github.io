
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
                const count = value.count;
                rows += `
            <tr>
                <td class="word-count">${count}</td>
                <td>${root}</td>
                <td>${senses}</td>
            </tr>
            `
            }

            let body = document.getElementById('table-wrapper');

            table = `
            <div class="container table-wrapper m-auto">
                <table class="table table-bordered table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Count</th>
                            <th scope="col">Word</th>
                            <th scope="col">Definition</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
            </div>
                `


            body.innerHTML = table
        });


})(jQuery)