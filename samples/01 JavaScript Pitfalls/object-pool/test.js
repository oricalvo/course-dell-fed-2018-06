try {
    var pool = ObjectPool();
    var pool2 = ObjectPool();

    var ori = {
        id: 1,
        name: "Ori",
    };

    var likeOri = {
        id: 1,
        name: "Ori",
    };

    pool.add(ori);
    pool.add(likeOri);
    pool.add(ori);

    pool.get();
    pool.get();

    if (pool.count() != 0) {
        throw new Error("count is not ZERO as expected");
    }

    console.log("PASS");
}
catch(err) {
    console.log("FAIL", err);
}
