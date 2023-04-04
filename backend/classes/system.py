class MkDelivery():
    def __init__(self):
        self.__user_list = []
        self.__category_list = []

    def add_user(self, user):
        self.__user_list.append(user)

    def add_category(self, category):
        self.__category_list.append(category)

    def category(self, name):
        for p in self.__category_list:
            if p.name == name:
                return p
            
    def user(self, name):
        for u in self.__user_list:
            if u.name == name:
                return u
            
    def search_category(self,name):
        category = []
        for i in self.__category_list:
            if name == i.name:
                category.append(i)
        return category