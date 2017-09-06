# COMMENTING OUT FOR NOW. NOT SURE THE BEST WAY TO UNIT TEST THIS SERVICE. MAYBE UNITTEST IS THE WRONG WAY TO GO?
# from checkAnagramService import app
# import unittest

# class checkAnagramServiceTests(unittest.TestCase):

# 	@classmethod
# 	def setUpClass(cls):
# 		pass

# 	@classmethod
# 	def tearDownClass(cls):
# 		pass

# 	def setUp(self):
# 		self.app = app.test_client()
# 		self.app.testing = True

# 	def tearDown(self):
# 		pass

# 	# Simple test to check basic 404, Flask should just handle this
# 	def test_pagenotfound_statuscode(self):
# 		result = self.app.get('/missing-page')
# 		self.assertEqual(result.status_code, 404)

# 	# Now let's test our own error returns
# 	def test_invalidrequest_statuscode(self):
# 		result = self.app.get('/comparison')
# 		self.assertEqual(result.status_code, 400)

# 	def test_invalidrequest_singlearg_statuscode(self):
# 		result = self.app.get('/comparison?first=something')
# 		self.assertEqual(result.status_code, 400)

# 	def test_successfulrequest_statuscode(self):
# 		result = self.app.get('comparison?first=something&second=somethingelse')
# 		self.assertEqual(result.status_code, 200)

# if __name__=='__main__':
# 	unittest.main()

