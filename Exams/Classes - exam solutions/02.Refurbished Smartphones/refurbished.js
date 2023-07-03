class RefurbishedSmartphones {
  constructor(retailer) {
    this.retailer = retailer;
    this.availableSmartphones = [];
    this.soldSmartphones = [];
    this.revenue = 0;
  }
  addSmartphone(model, storage, price, condition) {
    if (model === '' || storage < 0 || price < 0 || condition === '') {
      throw new Error('Invalid smartphone!');
    }

    this.availableSmartphones.push({ model, storage, price, condition });
    return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(
      2
    )}$`;
  }
  sellSmartphone(model, desiredStorage) {
    let desiredModel = model;
    let soldPrice = 0;
    let wantedStorage = Number(desiredStorage);
    const foundPhone = this.availableSmartphones.find(
      ({ model }) => model === desiredModel
    );

    if (foundPhone == undefined) {
      throw new Error(`${desiredModel} was not found!`);
    }
    if (foundPhone.storage >= wantedStorage) {
      soldPrice = foundPhone.price;
    } else if (Math.abs(foundPhone.storage - desiredStorage)) {
      soldPrice = foundPhone.price - foundPhone.price * 0.1;
    } else {
      soldPrice = foundPhone.price - foundPhone.price * 0.2;
    }

    this.availableSmartphones.filter((x) => x.model != model);
    this.revenue += soldPrice;
    this.soldSmartphones.push({
      model,
      storage: foundPhone.storage,
      soldPrice,
    });
    return `${model} was sold for ${soldPrice.toFixed(2)}$`;
  }
  upgradePhones() {
    if (this.availableSmartphones.length === 0) {
      return 'There are no available smartphones';
    }

    this.availableSmartphones = this.availableSmartphones.map((phone) => {
      const doubledStorage = phone.storage * 2;
      const roundedPrice = phone.price.toFixed(2);
      return {
        ...phone,
        storage: doubledStorage,
        price: roundedPrice,
      };
    });

    const availablePhones = this.availableSmartphones
      .map(
        (phone) =>
          `${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price}$`
      )
      .join('\n');

    return `Upgraded Smartphones:\n${availablePhones}`;
  }
  salesJournal(criteria) {
    if (criteria !== 'storage' && criteria !== 'model') {
      throw new Error('Invalid criteria!');
    }
    if (criteria == 'storage') {
      this.soldSmartphones.sort((a, b) => b.storage - a.storage);
    } else if (criteria == 'model') {
      this.soldSmartphones.sort((a, b) => a.model.localeCompare(b.model));
    }

    let result = [];
    result.push(
      `${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`
    );
    result.push(`${this.soldSmartphones.length} smartphones sold:`);
    this.soldSmartphones.forEach((s) =>
      result.push(`${s.model} / ${s.storage} GB / ${s.soldPrice.toFixed(2)}$`)
    );
    return result.join('\n');
  }
}
//* Test - 01
let retailer = new RefurbishedSmartphones('SecondLife Devices');
console.log(retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good'));
console.log(retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect'));
console.log(retailer.addSmartphone('', 512, 1900, 'good'));

// Output
// New smartphone added: Samsung S20 Ultra / 256 GB / good condition - 1000.00$
// New smartphone added: Iphone 12 mini / 128 GB / perfect condition - 800.00$
// Uncaught Error Error: Invalid smartphone!

//* Test - 02
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.sellSmartphone('Samsung S20 Ultra', 256));
// console.log(retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256));
// console.log(retailer.sellSmartphone('Samsung Galaxy A13', 64));

//Output
// Samsung S20 Ultra was sold for 1000.00$
// Xiaomi Redmi Note 10 Pro was sold for 297.00$
// Uncaught Error Error: Samsung Galaxy A13 was not found!

//* Test - 03
// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// console.log(retailer.upgradePhones());

// Output
// Upgraded Smartphones:
// Samsung S20 Ultra / 512 GB / good condition / 1000.00$
// Iphone 12 mini / 256 GB / perfect condition / 800.00$
// Xiaomi Redmi Note 10 Pro / 256 GB / perfect condition / 330.00$

// let retailer = new RefurbishedSmartphones('SecondLife Devices');
// retailer.addSmartphone('Samsung S20 Ultra', 256, 1000, 'good');
// retailer.addSmartphone('Iphone 12 mini', 128, 800, 'perfect');
// retailer.addSmartphone('Xiaomi Redmi Note 10 Pro', 128, 330, 'perfect');
// retailer.sellSmartphone('Samsung S20 Ultra', 256);
// retailer.sellSmartphone('Xiaomi Redmi Note 10 Pro', 256);
// console.log(retailer.salesJournal('model'));

// SecondLife Devices has a total income of 1297.00$
// 2 smartphones sold:
// Samsung S20 Ultra / 256 GB / 1000.00$
// Xiaomi Redmi Note 10 Pro / 128 GB / 297.00$
