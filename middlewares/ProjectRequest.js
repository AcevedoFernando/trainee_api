
module.exports = {
    rules: {
        'name': 'required|max:100',
        'price': 'required|numeric',
        'cost': 'numeric',
        'machine': 'string|max:100',
        'delivery_at': 'required|date',
        'type': 'string|max:100',
        'files': 'array',
        'file.*.name': 'string|max:100'
    }
};

const requiredErrorMessage = (value) => {
    throw new Error(`El campo ${value} es requerido`)
}

const lenghtErrorMessage = (value, lenght) => {
    throw new Error(`El campo ${value} debe ser menor a ${lenght}`)
} 