json.comment do
  json.extract! @comment, :id, :title, :body, :commenter_id, :photo_id, :commenter
end