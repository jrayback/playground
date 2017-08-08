#!/usr/bin/python

import unittest
import checkAnagram

class TestCheckAnagram(unittest.TestCase) :

	def test_simple(self) :
		str1 = 'cinema'
		str2 = 'iceman'
		self.assertTrue(checkAnagram.checkAnagram(str1,str2))

	def test_extra_letters(self) :
		str1 = 'cinemaa'
		str2 = 'iceman'
		self.assertFalse(checkAnagram.checkAnagram(str1,str2))

	def test_mixed_case(self) :
		str1 = 'Cinema'
		str2 = 'iceman'
		self.assertTrue(checkAnagram.checkAnagram(str1,str2))

	def test_special_chars(self) :
		str1 = 'f$~$/\n#011'
		str2 = 'iceman'
		self.assertFalse(checkAnagram.checkAnagram(str1,str2))

if __name__ == '__main__' :
	unittest.main()