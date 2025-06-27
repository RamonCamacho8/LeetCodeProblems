from solution import twoSum

def test_two_sum():
    # Test Case 1
    assert twoSum([2, 7, 11, 15], 9) == [0, 1]
    # Test Case 2
    assert twoSum([3, 2, 4], 6) == [1, 2]
    # Test Case 3
    assert twoSum([3, 3], 6) == [0, 1]