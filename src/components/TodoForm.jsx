import React, { useState } from "react";
const TodoForm = ({ addTodo }) => {
    //definisikan state "Title" untuk menambahkan todo yang baru
    const [title, setTitle] = useState('')
    // Tambahkan state untuk pesan kesalahan
    const [errorMessage, setErrorMessage] = useState(''); 
    // Tambahkan state untuk pesan sukses
    const [successMessage, setSuccessMessage] = useState(''); 
    //definisikan function handleSubmit
    const handleSubmit = ( event ) => {
        event.preventDefault();
        if (title === '') {
            // Atur pesan kesalahan jika form kosong
            setErrorMessage('Todo title cannot be empty'); 
            // Hapus pesan sukses jika ada kesalahan
            setSuccessMessage('');
        } else {
            addTodo(title);
            setTitle('')
            // Hapus pesan kesalahan jika form valid
            setErrorMessage(''); 
            // Atur pesan sukses
            setSuccessMessage('Todo added successfully!');
        }
        addTodo(title) //meneruskan "title" sebagai argument
    };
    //definisikan function "handleChangeTitle"
    const handleChangeTitle = (event) => {
        setTitle(event.target.value)
        setErrorMessage(''); // Hapus pesan kesalahan saat pengguna mulai mengetik
        setSuccessMessage(''); // Hapus pesan sukses jika pengguna mulai mengetik

    }
    // perikasa function "handleChangeTitle" apakah berfungsi
    console.log(title);
    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add your Todo"
                    style={styles.formInput}
                    value= {title}
                    onChange={(event) => {
                        handleChangeTitle(event);
                    }}
                />
                <button style={styles.button}>Add Todo</button>
            </form>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Tampilkan pesan kesalahan jika ada */}
            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>} {/* Tampilkan pesan sukses jika ada */}
        </div>
    );
};

const styles = {
    container: {
        marginBottom: '32px',
    },
    formInput: {
        height: '66px',
        width: '40%',
        fontSize: '16px',
        padding: '0 16px',
    },
    button: {
        height: '72px',
        fontSize: '16px',
    },
};

export default TodoForm;