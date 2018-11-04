function LRU(maxCount) {
    const problemDescription = 
    `
    This problem was asked by Google.
    
    Implement an LRU (Least Recently Used) cache. It should be able to be initialized with a cache size n, and contain the following methods:
    
    set(key, value): sets key to value. If there are already n items in the cache and we are adding a new item, then it should also remove the least recently used item.
    get(key): gets the value at key. If no such key exists, return null.
    Each operation should run in O(1) time.    
    `;

    console.log(`Problem Description \n${problemDescription}`);
    this.countlimit = maxCount || 10;
    this.items = {};
    this.numITems = 0;
    this.itemUseCount = []
  
    Object.defineProperty(this, 'itemStore', {
      value: this.items,
      writable: false,
      configurable: false,
      enumerable: true
    });

    Object.defineProperty(this, 'getitemUseCount', {
      value: this.itemUseCount,
      writable: false,
      configurable: false,
      enumerable: true
    });
  
    this.getItem = function(key) {
      if (this.items[key]) {
        if (this.updateItemUseCount(key)) {
          return this.items[key]['value'];
        }
        throw new Error('Can not fetch this item');
      }
      return null;
    }
  
    this.setItem = function(key, value) {
      if (this.items[key]) {
        this.items[key]['value'] = value;
      } else if (this.numITems < this.countlimit) {
        this.addNewItem(key,value)
      } else {
        const leastUsedItem = this.itemUseCount[0];
        // remove the item from itemUseCount
        this.itemUseCount.splice(0, 1);
        if (delete this.items[leastUsedItem]) {
          this.numITems -= 1;
          this.addNewItem(key,value)
        } else {
          throw new error('Can not remove least recently used item')
        }
      }
    }
  
    this.getLeastUsedItem = function () {
  
    }
  
    this.updateItemUseCount = function(key) {
      try {
        const itemIndex = this.findIndex(this.itemUseCount, key);

        if (itemIndex > -1) {
          this.itemUseCount.splice(itemIndex, 1);
        }
        this.itemUseCount.push(key);
        this.items[key]['useCountIndex'] += 1;
        return true;
      } catch (ex) {
        return false;
      }
    }
  
    this.addNewItem = function(key, value) {
      this.items[key] = {
        value,
        useCountIndex: 0
      }
      this.itemUseCount.push(key);
      this.numITems += 1;
    }

    this.findIndex =  function(list, key) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] === key) {
          return i;
        }
      }
      return -1;
    }
    
  }
  
  var test = new LRU(5);
  test.setItem('cele', 'nkem');
  test.setItem('nkem', 'cele');
  test.setItem('obim', 'jannie');
  test.getItem('cele')
  test.getItem('nkem')
  test.getItem('obim')
  test.getItem('cele')
  test.setItem('1', 'cele1');
  test.setItem('2', 'jannie2');
  test.setItem('3', 'jannie2');
  test.getItem('cele')
  console.log('test', test.itemStore, test.itemUseCount);
  