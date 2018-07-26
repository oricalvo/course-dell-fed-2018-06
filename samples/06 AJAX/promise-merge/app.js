main();

async function main() {
    const res = await Promise.all([getData(42), getData(21)]);

    console.log(res[0] + res[1]);
}

function merge(promises) {
    return new Promise((resolve, reject)=> {
        let pending = promises.length;
        let results = [];
        let rejected = false;

        for (let i=0; i<promises.length; i++) {
            const promise = promises[i];

            promise.then(function(res) {
                if(rejected) {
                    return;
                }

                results[i] = res;

                if (--pending == 0) {
                    resolve(results);
                }
            });

            promise.catch(function(err) {
                reject(err);
                rejected = true;
            });
        }
    });
}


function getData(num) {
    return new Promise(resolve => {
        setTimeout(() => resolve(num), 2500);
    });
}

