const fs = require('fs');

const path = './storage/storage.json';

function getAll() {
    const arr = JSON.parse(fs.readFileSync(path));
    if (!arr.length) throw new Error('массив пуст');
    return arr;
}

function createEnvironment(label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    arr.push({
        id: label.toLowerCase(),
        label: label,
        category: category,
        priority: priority
    });
    fs.writeFileSync(path, JSON.stringify(arr))
    return arr;
};

function updateEnvironment(id, label, category, priority) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id !== elem);
    if (filtered.length !== arr.length) {
        arr.push({
            id: id,
            label: label,
            category: category,
            priority: priority
        });
    } else {
        throw new Error('id нет');
    };
    fs.writeFileSync(path, JSON.stringify(filtered));
};

function deleteEnvironment(id) {
    const arr = JSON.parse(fs.readFileSync(path));
    const filtered = arr.filter((elem) => elem.id != id);
    fs.writeFileSync(path, JSON.stringify(filtered))
    return filtered;
};

module.exports = { getAll, createEnvironment, updateEnvironment, deleteEnvironment };