Alogorithm for  Lexicographic Sorting

Array to be sorted: arr
Lexicographic order string: lexicographicOrder

Step 1: Create hash table for lexicographicOrder
	-Key is character of string lexicographicOrder
	-Value is its index
	Example: lexicographicOrder = "bac"
		Hashtable should be
			Key:b -> Value: 0
			Key:a -> Value: 1
			Key:c -> Value: 2
Step 2: Use quick soft on array of string arr
	To Compare two elements , use hashtable at step 1
		Let's say compare ele1 to ele2: loop ele1 and ele2, compare "character on ele1" to  "character on ele2" by using hashtable
	
------------------------------------------
	

Detail in attached code:
	Print results into html page

	
