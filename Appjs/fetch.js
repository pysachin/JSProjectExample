


document.getElementById('id-aj-btn-5').addEventListener('click', LoadDataTxt);
document.getElementById('id-aj-btn-6').addEventListener('click', LoadDataJSON);
document.getElementById('id-aj-btn-7').addEventListener('click', LoadDataJSONArray);
document.getElementById('id-aj-btn-8').addEventListener('click', LoadRESTAPIData);

function LoadDataTxt() {

    fetch('data.txt')
        .then(function (response) {
            return response.text();
        }).then(function (data) {
            document.getElementById('id-output-5').innerHTML = `
            <h1>${data}</h1>
                        `
        }).catch(function (error) {
            document.getElementById('id-output-5').innerHTML = `
            <h1>${error}</h1>                        `

        });

}


function LoadDataJSON() {


    fetch('employee.json')
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            document.getElementById('id-output-6').innerHTML = `
                <ul>
                        <li> ID : ${data.id} </li>
                        <li> Name : ${data.name} </li>
                        <li> Company : ${data.company} </li>
                        <li> Job : ${data.job} </li>
                </ul>            
            `;
        }).catch(function (error) {
            document.getElementById('id-output-6').innerHTML = `
        <h1>${error}</h1>                        `

        });
}

function LoadDataJSONArray() {


    fetch('employees.json')
        .then(function (response) {
            return response.json();
        }).then(function (data) {

            let htmloutput = ''

            data.forEach(emp => {

                htmloutput +=
                    `
                    <ul>
                            <li> ID : ${emp.id} </li>
                            <li> Name : ${emp.name} </li>
                            <li> Company : ${emp.company} </li>
                            <li> Job : ${emp.job} </li>
                    </ul>            
                `;

            });

            document.getElementById('id-output-7').innerHTML = htmloutput;

        }).catch(function (error) {
            document.getElementById('id-output-7').innerHTML = `
            <h1>${error}</h1>                        `

        });

}

function LoadRESTAPIData() {


    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            return response.json();
        }).then(function (posts) {

            let htmloutput = ''

            posts.forEach(post => {

                htmloutput +=
                    `
                        <ul>
                                <li> ID : ${post.id} </li>
                                <li> Name : ${post.title} </li>                                
                        </ul>            
                    `;

            });

            document.getElementById('id-output-8').innerHTML = htmloutput;

        }).catch(function (error) {
            document.getElementById('id-output-8').innerHTML = `
        <h1>${error}</h1>                        `

        });
}