const simpan = () => {
    let item = document.getElementById("itemInput").value

    let itemGet = localStorage.getItem('daftarItem')

    let itemArray = []
    if (itemGet == null) {
        itemArray = [item]
    } else {
        itemArray = JSON.parse(itemGet)
        itemArray.push(item)
    }
    
    let itemSet = JSON.stringify(itemArray)

    localStorage.setItem('daftarItem',itemSet)
}