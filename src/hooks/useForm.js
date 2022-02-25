import { useState } from "react";

export function useForm(input = {}) {
    const [formState, setFormState] = useState(input);
    const [formError, setFormError] = useState('');

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormState((prevState) => {
            return { ...prevState, [name]: value };
        });
    };
    return { formState, handleFormChange, formError, setFormError}
}