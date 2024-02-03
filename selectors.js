const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seededFruits = [];
    let fruitList = document.body.children[1].children[2].children;
    for (const fruit of fruitList) {
        fruit.classList.forEach(className => {
            if (className === 'seed') seededFruits.push(fruit)
        })
    }
    console.log(seededFruits);
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedLessFruits = [];
    for (const fruit of fruitList) {
        fruit.classList.forEach(className => {
            if (className === 'seedless') seedLessFruits.push(fruit)
        })
    }
    console.log(seedLessFruits);

    // 3. Get first seedless fruit element
    // Your code here
    let firstSeedlessFruit = null;
    for (const fruit of fruitList) {
        // for (const className of fruitList) {
        //     console.log(className)
        // }
        if (fruit.className === 'seedless') firstSeedlessFruit = fruit;
    }
    console.log(firstSeedlessFruit);

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const two = document.body.children[2];
    const innerSpan = two.children[1].children[0].children[0];
    console.log(innerSpan) // 'you'

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapper = two.children[1];
    console.log(wrapper.children);

    // 6. Get all odd number list items in the list
    // Your code here
    const oddNumberedListItems = [];
    const list = two.children[2];
    for (const listItem of list.children) {
        if (listItem.className === 'odd') {
            oddNumberedListItems.push(listItem)
        }
    }
    console.log(oddNumberedListItems)

    // 7. Get all even number list items in the list
    // Your code here
    const evenNumberedListItems = [];
    for (const listItem of list.children) {
        if (listItem.innerText === 'Two' || listItem.innerText === 'Four') {
            evenNumberedListItems.push(listItem)
        }
    }
    console.log(evenNumberedListItems)

    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const techCompaniesWithoutClassName = [];
    const three = document.body.children[3];
    const techCompanies = three.children[1].children;
    for (let company of techCompanies) {
        if (!company.className) techCompaniesWithoutClassName.push(company)
    }
    console.log(techCompaniesWithoutClassName)

    // 9. Get "Amazon" list element
    // Your code here
    const amazon = techCompanies[2];
    console.log(amazon);

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornList = three.children[3];
    console.log(unicornList.children)
}

window.onload = select;
