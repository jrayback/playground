import unittest

class TestExample(unittest.TestCase):

	def test1(self):
		self.assertEqual('a','a')

	def test2(self):
		self.assertEqual('d','d')

	def test3(self):
		self.assertEqual('z','z')


if __name__ == '__main__':
	unittest.main()