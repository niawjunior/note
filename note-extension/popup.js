
chrome.runtime.sendMessage(
  {
    command: "auth"
  });
  var local_note_name = localStorage.getItem('note_name') || ''
  $('#note_name').val(local_note_name)
  var local_note_description = localStorage.getItem('note_description') || ''
  $('#note_description').val(local_note_description)
  var local_note_url = localStorage.getItem('note_url') || ''
  $('#note_url').val(local_note_url)

  var local_tag = localStorage.getItem('tag')
  if (local_tag && local_tag.length !== 0 && local_tag.toString() !== '[]') {
    var item = JSON.parse(local_tag)
    item.forEach(item => {
      $(`input:checkbox[value=${item}]`).prop('checked', true)
    })
  }

  var local_category = localStorage.getItem('category')
  if (local_category && local_category.length !== 0 && local_category.toString() !== '[]') {
    var item = JSON.parse(local_category)
    item.forEach(item => {
      $(`input:checkbox[value=${item}]`).prop('checked', true)
    })
  }

  $('#note_name').keyup(e => {
    localStorage.setItem('note_name', e.target.value)
  })

  $('#note_description').keyup(e => {
    localStorage.setItem('note_description', e.target.value)
  })

  $('#note_url').keyup(e => {
    localStorage.setItem('note_url', e.target.value)
  })

  $('input:checkbox[name=tag]').change(function() {
    var tag = []
    $('input:checkbox[name=tag]:checked').each(function(){
      tag.push($(this).val())
    })
    localStorage.setItem('tag', JSON.stringify(tag))
  })

  $('input:checkbox[name=category]').change(function() {
    var tag = []
    $('input:checkbox[name=category]:checked').each(function(){
      tag.push($(this).val())
    })
    localStorage.setItem('category', JSON.stringify(tag))
  })

  $('#submit_note').submit(e => {
    e.preventDefault()
    var tag = []
    $('input:checkbox[name=tag]:checked').each(function(){
      tag.push($(this).val())
    })

    var category = []
    $('input:checkbox[name=category]:checked').each(function(){
      category.push($(this).val())
    })
    var note_name = $('#note_name').val()
    var note_description = $('#note_description').val()
    var note_url = $('#note_url').val()

    const data = {
      name: note_name || '',
      description: note_description || '',
      tag: tag,
      category: category,
      url: note_url || '',
      createdAt: Date.now()
    }
    chrome.runtime.sendMessage(
      {
        command: "add", collection: "Notes", data: data
      });
  })
  
  $('#reset').click(() => {
    $('#note_name').val('')
    $('#note_description').val('')
    $('#note_url').val('')

    $('input:checkbox[name=tag]:checked').each(function(){
      $(this).prop('checked',false);
    })
    $('input:checkbox[name=category]:checked').each(function(){
      $(this).prop('checked',false);
    })

    localStorage.removeItem('note_name')
    localStorage.removeItem('note_description')
    localStorage.removeItem('note_url')
    localStorage.removeItem('tag')
    localStorage.removeItem('category')
  })