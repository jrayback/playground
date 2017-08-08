import tornado.ioloop
import tornado.web
import checkAnagram

class MainHandler(tornado.web.RequestHandler):
    def get(self):
    	string1 = 'ickeman'
    	string2 = 'cinema'
    	result = 'true' if checkAnagram.checkAnagram(string1,string2) else 'false'
        self.write("<head></head><body><h1 style=\"color:green;\">" + result + "</h1></body>")


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
    ])

if __name__ == "__main__":
    app = make_app()
    app.listen(8898)
    tornado.ioloop.IOLoop.current().start()