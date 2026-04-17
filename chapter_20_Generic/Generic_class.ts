class GenericClass<T> {
    privateItem: T[] = []:

    addItem(item: T): void {
        this.privateItem.push(item);
    }
    
