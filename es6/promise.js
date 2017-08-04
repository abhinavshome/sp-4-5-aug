const bringGift = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let giftOptions = ['bat', 'football', 'music player'];
            let gift = giftOptions[Math.floor(Math.random() * 6)];
            console.log(gift);
            if(gift)
                resolve(gift);
            else
                reject('Sorry I was busy');
        }, 2000);
    });
}

const makePlan = (gift) => {
    switch (gift) {
        case 'bat':
            console.log('I will play cricket on weekend');
            break;
        case 'football':
            console.log('I will play football on weekend');
            break;
        case 'music player':
            console.log('I will listen to music on weekend');
            break;
    }
}

bringGift().then(makePlan, (err) => console.log('No Gift :: ' + err));
//makeAjaxCall().then((data) => {}, (data) => {})





