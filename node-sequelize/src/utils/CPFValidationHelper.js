module.exports = (cpf) => {
    const pattern = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    return pattern.test(cpf);
};