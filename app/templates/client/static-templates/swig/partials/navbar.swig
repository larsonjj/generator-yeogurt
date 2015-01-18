<div class="navbar">
  <div class="nav">
    <ul class="nav-list pull-left">
      <li class="nav-item"><a href="/">Home</a></li>
    </ul>
    <ul class="nav-list pull-right">
       {% if !user %}
        <li class="nav-item">
          <a href='/login'>Login</a>
        </li>
        <li class="nav-item">
          <a href='/signup'>Create Account</a>
        </li>
      {% else %}
        <li class="nav-item">
          Hello {{user.firstName || user.username}}
        </li>
        <li class="nav-item">
          <a href='/settings'>My Account</a>
        </li>
        <li class="nav-item">
          <a href='/logout'>Logout</a>
        </li>
      {% endif %}
    </ul>
  </div>
</div>
