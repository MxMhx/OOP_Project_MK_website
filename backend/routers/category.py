import sys
sys.path.append('/backend/')
from fastapi import APIRouter
from models.product import ProductCategory, Product
from data import mk

router = APIRouter(prefix="/category", tags=['category'])

mk.add_category(ProductCategory("โปรโมชั่น","https://www.mk1642.com/getattachment/b4991225-a5e5-49b5-afe0-f7bf12af9316/Promotion.aspx"))
mk.add_category(ProductCategory("จานเดี่ยว","https://www.mk1642.com/getattachment/14c574d8-4a19-4c9e-8d8f-63dd3c242acf/SingleDish.aspx"))
mk.add_category(ProductCategory("ชุดสุดคุ้ม","https://www.mk1642.com/getattachment/deceefa7-18a7-472e-9a12-b77e0b00fba9/SetMeal.aspx"))
mk.add_category(ProductCategory("สุกี้สด","https://www.mk1642.com/getattachment/f74b6557-aee1-4e91-92a6-4bfa667055bf/FreshSuki.aspx"))
mk.add_category(ProductCategory("เป็ดย่างและอื่นๆ","https://www.mk1642.com/getattachment/58c0b8fd-dde5-4dff-abb1-237282a9b029/Roasted.aspx"))
mk.add_category(ProductCategory("ของทานเล่น","https://www.mk1642.com/getattachment/088a99da-359d-4738-8443-d82b47f2f803/Snack.aspx"))
mk.add_category(ProductCategory("น้ำและขนม","https://www.mk1642.com/getattachment/ba27379d-f481-4a4d-890f-988891b43628/Dessert.aspx"))
mk.add_category(ProductCategory("สแน็คบ็อกซ์และจัดเลี้ยง","https://www.mk1642.com/getattachment/da4c1a0b-ba1d-474d-b56f-fec0e9e7541f/SnackBox.aspx"))

mk.get_category("โปรโมชั่น").add_product(Product("Summer Freedom 499","https://www.mk1642.com/getattachment/f2af6d3f-b7aa-40bd-8de1-e2ee113575de/4131.aspx",499,"เลือกได้ 10 เมนูเลย","1800","ชุด4คน"))
mk.get_category("โปรโมชั่น").add_product(Product("Summer Freedom 799","https://www.mk1642.com/getattachment/3e12181b-958e-4580-bd00-3fa674c1cd9f/4132.aspx",799,"เลือกได้ 10 เมนูเลย","2400","ชุด6คน"))
mk.get_category("โปรโมชั่น").add_product(Product("Happy Party Set","https://www.mk1642.com/getattachment/f16d0a6b-ff29-4654-8c27-c19a45141fe8/4160.aspx",499,"เมนูนี้มีส่วนผสมของกุ้ง","1500","Set"))
mk.get_category("จานเดี่ยว").add_product(Product("ยำวุ้นเส้นทะเล","https://www.mk1642.com/getmetafile/07e6d178-aa21-48cb-95c9-49553070e258/%e0%b8%a2%e0%b8%b3%e0%b8%a7%e0%b8%b8%e0%b9%89%e0%b8%99%e0%b9%80%e0%b8%aa%e0%b9%89%e0%b8%99%e0%b8%97%e0%b8%b0%e0%b9%80%e0%b8%a5_419x260.aspx?maxsidesize=1900",139,"แซ่บมากๆ","150","ยำ"))
mk.get_category("จานเดี่ยว").add_product(Product("กุ้งแพกรอบต้มยำ","https://www.mk1642.com/getmetafile/cfa3d12a-0cb6-489d-a8d9-e297bfceb8b7/%e0%b8%81%e0%b8%b8%e0%b9%89%e0%b8%87%e0%b9%81%e0%b8%9e%e0%b8%81%e0%b8%a3%e0%b8%ad%e0%b8%9a%e0%b8%95%e0%b9%89%e0%b8%a1%e0%b8%a2%e0%b8%b3_419x260.aspx?maxsidesize=1900",109,"แซ่บมากๆ","120","ยำ"))
mk.get_category("จานเดี่ยว").add_product(Product("ข้าวต้มแห้งแซ่บสมุทร","https://www.mk1642.com/getmetafile/e344f56f-7e09-4fa4-96ab-ec16b8c9f027/%e0%b8%82%e0%b9%89%e0%b8%b2%e0%b8%a7%e0%b8%95%e0%b9%89%e0%b8%a1%e0%b9%81%e0%b8%ab%e0%b9%89%e0%b8%87%e0%b9%81%e0%b8%8b%e0%b9%88%e0%b8%9a%e0%b8%aa%e0%b8%a1%e0%b8%b8%e0%b8%97%e0%b8%a3_419x260.aspx?maxsidesize=1900",99,"แซ่บมากๆ","90","ยำ"))
mk.get_category("ชุดสุดคุ้ม").add_product(Product("ชุดแซ่บหมูเน้นเน้น","https://www.mk1642.com/getmetafile/9f2d42c4-0463-4668-9a8b-a02ac463198c/%e0%b8%8a%e0%b8%b8%e0%b8%94%e0%b9%81%e0%b8%8b%e0%b9%88%e0%b8%9a%e0%b8%ab%e0%b8%a1%e0%b8%b9%e0%b9%80%e0%b8%99%e0%b9%89%e0%b8%99%e0%b9%80%e0%b8%99%e0%b9%89%e0%b8%99_419x260.aspx?maxsidesize=1900",499,"แซ่บมากๆ","90","ยำ"))
mk.get_category("ชุดสุดคุ้ม").add_product(Product("ชุดแฮปปี้คอมโบ ข้าวหน้าเป็ด","https://www.mk1642.com/getmetafile/c644e4c5-6c26-4bed-b90c-55ecdc0c6f06/%e0%b8%82%e0%b8%b2%e0%b8%a7%e0%b8%ab%e0%b8%99%e0%b8%b2%e0%b9%80%e0%b8%9b%e0%b8%94-%e0%b8%82%e0%b8%99%e0%b8%a1%e0%b8%88%e0%b8%9a.aspx?maxsidesize=1900",163,"แซ่บมากๆ","140","ยำ"))
mk.get_category("ชุดสุดคุ้ม").add_product(Product("ชุดแฮปปี้บ็อกซ์ บะหมี่หยกหมูกรอบ","https://www.mk1642.com/getmetafile/facc5203-33ca-4177-92fb-fffb3bd3ede4/%e0%b8%8a%e0%b8%b8%e0%b8%94%e0%b9%81%e0%b8%ae%e0%b8%9b%e0%b8%9b%e0%b8%b5%e0%b9%89%e0%b8%9a%e0%b9%87%e0%b8%ad%e0%b8%81%e0%b8%8b%e0%b9%8c-%e0%b8%9a%e0%b8%b0%e0%b8%ab%e0%b8%a1%e0%b8%b5%e0%b9%88%e0%b8%ab%e0%b8%a2%e0%b8%81%e0%b8%ab%e0%b8%a1%e0%b8%b9%e0%b8%81%e0%b8%a3%e0%b8%ad%e0%b8%9a.aspx?maxsidesize=1900",111,"แซ่บมากๆ","90","ยำ"))
mk.get_category("สุกี้สด").add_product(Product("ปลาหมึกไข่","https://www.mk1642.com/getmetafile/a271b7f1-576c-44f7-9995-b4b709d15641/%e0%b8%9b%e0%b8%a5%e0%b8%b2%e0%b8%ab%e0%b8%a1%e0%b8%b6%e0%b8%81%e0%b9%84%e0%b8%82%e0%b9%88_419x260.aspx?maxsidesize=1900",159,"แซ่บมากๆ","60","ยำ"))
mk.get_category("สุกี้สด").add_product(Product("ชุดผักพิเศษ","https://www.mk1642.com/getmetafile/ed53a0a0-c4f2-4018-9ce9-b56d429351ba/%e0%b8%8a%e0%b8%b8%e0%b8%94%e0%b8%9c%e0%b8%b1%e0%b8%81%e0%b8%9e%e0%b8%b4%e0%b9%80%e0%b8%a8%e0%b8%a9_419x260.aspx?maxsidesize=1900",149,"แซ่บมากๆ","20","ยำ"))
mk.get_category("สุกี้สด").add_product(Product("เนื้อกุ้งสด","https://www.mk1642.com/getmetafile/9e6bb5a8-83c2-456f-a017-171ef223a42c/%e0%b9%80%e0%b8%99%e0%b8%b7%e0%b9%89%e0%b8%ad%e0%b8%81%e0%b8%b8%e0%b9%89%e0%b8%87%e0%b8%aa%e0%b8%94_419x260.aspx?maxsidesize=1900",93,"แซ่บมากๆ","50","ยำ"))
mk.get_category("เป็ดย่างและอื่นๆ").add_product(Product("เป็ดย่างMK (ตัว)","https://www.mk1642.com/getmetafile/857ff628-ecab-4d49-8a5b-652022a1a308/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Roasted-R0010.aspx?maxsidesize=1900",782,"แซ่บมากๆ","280","ยำ"))
mk.get_category("เป็ดย่างและอื่นๆ").add_product(Product("หมูกรอบเล็ก","https://www.mk1642.com/getmetafile/ce5946f2-2ede-4731-a346-ca0f4cd0bc5f/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Roasted-R0060.aspx?maxsidesize=1900",184,"แซ่บมากๆ","320","ยำ"))
mk.get_category("เป็ดย่างและอื่นๆ").add_product(Product("เนื้อเปื่อยฮ่องกง (ใหญ่)","https://www.mk1642.com/getmetafile/53773e81-2211-492e-9543-271bee330b4f/E-SourceCode-DEV_MK-12-CMS-PictureforWeb-Roasted-R0190.aspx?maxsidesize=1900",246,"แซ่บมากๆ","290","ยำ"))

@router.get("/")
def read_categort_list():
    return mk.get_all_category()

@router.get("/{category_name}")
def read_all_product_in_category(category_name: str):
    dt = []
    for product in mk.get_category(category_name).products:
        dt.append(product)
    return dt

@router.get("/{category_name}/{product_name}")
def read_product(category_name: str, product_name: str):
    return mk.get_category(category_name).get_product(product_name)