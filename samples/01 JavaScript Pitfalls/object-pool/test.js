try {
    var ori = {
        id: 1,
        name: "Ori",
    };

    var likeOri = {
        id: 1,
        name: "Ori",
    };

    objectPool.add(ori);
    objectPool.add(likeOri);
    objectPool.add(ori);

    objectPool.get();
    objectPool.get();

    if (objectPool.count() != 0) {
        throw new Error("FAILED");
    }

    console.log("PASS");
}
catch(err) {
    console.log("FAIL", err);
}
