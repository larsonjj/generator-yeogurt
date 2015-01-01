{% if messages.errors %}
    {% for error in messages.errors %}
        <div class="error">{{error.msg}}</div>
    {% endfor %}
{% endif %}

{% if messages.info %}
    {% for info in messages.info %}
        <div class="info">{{info.msg}}</div>
    {% endfor %}
{% endif %}

{% if messages.success %}
    {% for success in messages.success %}
        <div class="success">{{success.msg}}</div>
    {% endfor %}
{% endif %}
