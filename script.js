document.addEventListener('DOMContentLoaded', () => {
    const personTableBody = document.getElementById('person-table-body');
    const addRowBtn = document.getElementById('add-row-btn');

    function showTab(tabId) {
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.style.display = tab.id === tabId ? 'block' : 'none';
        });
        document.querySelectorAll('.tab-button').forEach(button => {
            button.classList.toggle('active', button.textContent === tabId.replace('-', ' ').replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase()));
        });
    }

    function calculateAge(dob) {
        const birthDate = new Date(dob);
        const ageDifMs = Date.now() - birthDate.getTime();
        const ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    function validateInputs(name, dob, aadhar, mobile) {
        if (!name || !dob || !aadhar || !mobile) return false;
        if (aadhar.length !== 12) return false;
        if (mobile.length !== 10) return false;
        return true;
    }

    function addRow() {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><input type="text" class="name-input"></td>
            <td><input type="date" class="dob-input"></td>
            <td><input type="text" class="aadhar-input"></td>
            <td><input type="text" class="mobile-input"></td>
            <td class="age-input">-</td>
            <td>
                <button class="save-btn">Save</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        personTableBody.appendChild(row);
        addRowEventListeners(row);
    }

    function addRowEventListeners(row) {
        row.querySelector('.dob-input').addEventListener('change', function() {
            const dob = this.value;
            const ageCell = row.querySelector('.age-input');
            ageCell.textContent = dob ? calculateAge(dob) : '-';
        });

        row.querySelector('.save-btn').addEventListener('click', function() {
            const name = row.querySelector('.name-input').value;
            const dob = row.querySelector('.dob-input').value;
            const aadhar = row.querySelector('.aadhar-input').value;
            const mobile = row.querySelector('.mobile-input').value;

            if (!validateInputs(name, dob, aadhar, mobile)) {
                alert('Please fill all fields correctly.');
                return;
            }

            const person = {
                Name: name,
                'Date of Birth': dob,
                'Aadhar Number': aadhar,
                'Mobile Number': mobile,
                Age: calculateAge(dob)
            };

            let persons = JSON.parse(localStorage.getItem('persons')) || [];
            persons.push(person);
            localStorage.setItem('persons', JSON.stringify(persons));
            row.querySelector('.delete-btn').disabled = false;
        });

        row.querySelector('.delete-btn').addEventListener('click', function() {
            if (row.querySelector('.save-btn').disabled) {
                row.remove();
                return;
            }

            const aadhar = row.querySelector('.aadhar-input').value;
            let persons = JSON.parse(localStorage.getItem('persons')) || [];
            persons = persons.filter(person => person['Aadhar Number'] !== aadhar);
            localStorage.setItem('persons', JSON.stringify(persons));
            row.remove();
        });
    }

    addRowBtn.addEventListener('click', addRow);

    function initialize() {
        showTab('add-new-person');
        const savedRows = JSON.parse(localStorage.getItem('persons')) || [];
        savedRows.forEach(person => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${person.Name}</td>
                <td>${person['Date of Birth']}</td>
                <td>${person['Aadhar Number']}</td>
                <td>${person['Mobile Number']}</td>
                <td>${person.Age}</td>
                <td>
                    <button class="delete-btn">Delete</button>
                </td>
            `;
            personTableBody.appendChild(row);

            row.querySelector('.delete-btn').addEventListener('click', function() {
                const aadhar = person['Aadhar Number'];
                let persons = JSON.parse(localStorage.getItem('persons')) || [];
                persons = persons.filter(p => p['Aadhar Number'] !== aadhar);
                localStorage.setItem('persons', JSON.stringify(persons));
                row.remove();
            });
        });
    }

    initialize();
});
