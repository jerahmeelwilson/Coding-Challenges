function missingNumber(nums, maxNum) {
    for (let i = 1; i <= maxNum; i++) {
        if (!nums.includes(i)) {
            return i
        }
    }
}