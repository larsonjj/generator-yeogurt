{% if messages.errors %}
    {% for error in messages.errors %}
        <div>{{error.msg}}</div>
    {% endfor %}
{% endif %}

{% if messages.info %}
    {% for info in messages.info %}
        <div>{{info.msg}}</div>
    {% endfor %}
{% endif %}

{% if messages.success %}
    {% for success in messages.success %}
        <div>{{success.msg}}</div>
    {% endfor %}
{% endif %}
