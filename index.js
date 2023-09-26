
(function ($) {

    fetch('data.json')
        .then((response) => response.json())
        .then((json) => {
            let parsed = JSON.parse(json);


            rows = ``;
            for (const item of parsed) {
                const value = item[1];
                const root = value.roots.join(', ');
                const senses = value.senses.join('; ');
                const count = value.count;
                rows += `
            <tr>
                <td>${count}</td>
                <td>${root}</td>
                <td>${senses}</td>
            </tr>
            `
            }

            let body = document.getElementById('table-wrapper');
            console.log(body)

            table = `<table class="table">
                    <thead>
                    <tr>
                        <th scope="col">Count</th>
                        <th scope="col">Word</th>
                        <th scope="col">First</th>
                    </tr>
                    </thead>
                    <tbody>
                        ${rows}
                    </tbody>
                </table>
                `


            body.innerHTML = table
        });


})(jQuery)