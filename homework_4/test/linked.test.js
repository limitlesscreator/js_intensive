const {LinkedList} = require('../linkedList')

function init(){
    const list = new LinkedList()

    list.append('a').append('b').append('c')

    return list
}

describe('Linked List', () => {

    test('Append', () => {
        let list = init()

        expect(list.append('x').toString()).toBe('a,b,c,x')
    })

    test('Prepend', () => {
        let list = init()

        expect(list.prepend('x').toString()).toBe('x,a,b,c')
    })

    test('Prepend', () => {
        let list = init()

        expect(list.prepend('x').toString()).toBe('x,a,b,c')
    })

    test('Find',() => {
        let list = init()

        expect(list.find('b').toString()).toBe('b')
        expect(list.find('q')).toBe(null)
    })

    test('Delete', () => {
        let list = init()
        list.delete('b')
        expect(list.toString()).toBe('a,c')
        expect(list.delete('c').toString()).toBe('c')
        expect(list.toString()).toBe('a')
    })

    test('Insert in the middle', () => {
        let list = init()

        let prev = list.find('b')

        list.insertAfter('x',prev)

        expect(list.toString()).toBe('a,b,x,c')
    })

})

