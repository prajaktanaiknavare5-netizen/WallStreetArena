try:
    import cv2
    img = cv2.imread('assets/images/qr-code.png')
    detector = cv2.QRCodeDetector()
    data, bbox, _ = detector.detectAndDecode(img)
    print("QR decoded:", data)
except Exception as e:
    print("Error:", e)
