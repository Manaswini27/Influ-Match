from flask import Flask, request, jsonify
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

app = Flask(__name__)
CORS(app)

def analyze_influencer(text):
    sentiment = "Positive" if "love" in text else "Neutral"
    tone = "Friendly" if "!" in text else "Informative"
    brand_fit_score = 85 if "skincare" in text.lower() else 60
    return tone, sentiment, brand_fit_score

def compute_similarity(brand_text, influencer_text):
    vectorizer = TfidfVectorizer()
    vectors = vectorizer.fit_transform([brand_text, influencer_text])
    similarity = cosine_similarity(vectors[0:1], vectors[1:2])[0][0]
    return round(similarity * 100, 2)

@app.route('/match', methods=['POST'])
def match_influencer():
    data = request.json
    influencer_text = data.get('content', '')
    brand_text = data.get('brand', '')
    tone, sentiment, brand_fit_score = analyze_influencer(influencer_text)
    similarity = compute_similarity(brand_text, influencer_text)
    return jsonify({
        'tone': tone,
        'sentiment': sentiment,
        'brand_fit_score': brand_fit_score,
        'similarity': similarity
    })

if __name__ == '__main__':
    app.run(debug=True)

    