import React, { useState } from "react";

const style = {
  table: {
    borderCollapse: "collapse",
  },
  tableCell: {
    border: "1px solid gray",
    margin: 0,
    padding: "5px 10px",
    width: "max-content",
    minWidth: "150px",
  },
  form: {
    container: {
      padding: "20px",
      border: "1px solid #f0f0f0",
      borderRadius: "4px",
      marginBottom: "10px",
    },
    input: {
      marginRight: "10px",
    },
    submitBtn: {
      marginTop: "10px",
    },
  },
};

function InformationTable({ userlist }) {
  return (
    <table style={style.table} className="informationTable">
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>
      </thead>
      <tbody>
        {userlist &&
          userlist
            .sort((a, b) => a.lastName.localeCompare(b.lastName))
            .map((entry, index) => (
              <tr key={index}>
                <td style={style.tableCell}>{entry.firstName}</td>
                <td style={style.tableCell}>{entry.lastName}</td>
                <td style={style.tableCell}>{entry.phone}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

function PhoneBookForm({ addEntryToPhoneBook }) {
  const [newEntry, setNewUser] = useState({
    firstName: "Coder",
    lastName: "Byte",
    phone: "8885559999",
  });

  const handleInputChange = (event) => {
    setNewUser({ ...newEntry, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addEntryToPhoneBook(newEntry);
    setNewUser({ firstName: "", lastName: "", phone: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={style.form.container}>
      <input
        style={style.form.input}
        type="text"
        name="firstName"
        placeholder="First Name"
        value={newEntry.firstName}
        onChange={handleInputChange}
      />
      <input
        style={style.form.input}
        type="text"
        name="lastName"
        placeholder="Last Name"
        value={newEntry.lastName}
        onChange={handleInputChange}
      />
      <input
        style={style.form.input}
        type="text"
        name="phone"
        placeholder="Phone"
        value={newEntry.phone}
        onChange={handleInputChange}
      />
      <button type="submit" style={style.form.submitBtn}>
        Submit
      </button>
    </form>
  );
}

function App() {
  const [userlist, setUserList] = useState([]);

  const addEntryToPhoneBook = (newUser) => {
    setUserList([...userlist, newUser]);
  };

  return (
    <section>
      <PhoneBookForm addEntryToPhoneBook={addEntryToPhoneBook} />
      <InformationTable userlist={userlist} />
    </section>
  );
}

export default App;
