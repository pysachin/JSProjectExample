


document.getElementById('id-aj-btn').addEventListener('click', LoadDataTxt);
document.getElementById('id-aj-btn-2').addEventListener('click', LoadDataJSON);
document.getElementById('id-aj-btn-3').addEventListener('click', LoadDataJSONArray);
document.getElementById('id-aj-btn-4').addEventListener('click', LoadRESTAPIData);

function LoadDataTxt() {

    console.log('LoadData');
    const xhl = new XMLHttpRequest();

    xhl.open('GET', 'data.txt', true);

    // xhl.onload = function () {
    //     console.log(this.status);
    //     if (this.status === 200) {
    //         document.getElementById('id-output').innerHTML = `<h1> ${this.responseText} </h1>`;
    //     }
    // };


    xhl.onreadystatechange = function () {
        console.log(this.status);
        // readyState
        /*
            0 unsent
            1 opened
            2 recieved
            3 Loading
            4 done
        */
        if (this.status === 200 && this.readyState === 4) {
            document.getElementById('id-output').innerHTML = `<h1> ${this.responseText} </h1>`;
        }
    };

    xhl.send();
}


function LoadDataJSON() {

    const xhl = new XMLHttpRequest();
    xhl.open('GET', 'employee.json', true);

    xhl.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {

            const emp = JSON.parse(this.responseText);

            document.getElementById('id-output-2').innerHTML = `
                <ul>
                        <li> ID : ${emp.id} </li>
                        <li> Name : ${emp.name} </li>
                        <li> Company : ${emp.company} </li>
                        <li> Job : ${emp.job} </li>
                </ul>
            
            `;
        }
    };

    xhl.send();
}

function LoadDataJSONArray() {

    const xhl = new XMLHttpRequest();
    xhl.open('GET', 'employees.json', true);

    xhl.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {

            const emps = JSON.parse(this.responseText);

            let htmloutput = ''

            emps.forEach(emp => {

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

            document.getElementById('id-output-3').innerHTML = htmloutput;
        }
    };

    xhl.send();
}

function LoadRESTAPIData() {

    const xhl = new XMLHttpRequest();
    xhl.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);

    xhl.onreadystatechange = function () {
        if (this.status === 200 && this.readyState === 4) {

            const posts = JSON.parse(this.responseText);

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

            document.getElementById('id-output-4').innerHTML = htmloutput;
        }
    };

    xhl.send();
}