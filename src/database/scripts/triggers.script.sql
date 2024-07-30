CREATE TRIGGER delete_top_image AFTER DELETE ON tops
FOR EACH ROW
BEGIN
    DELETE FROM top_images WHERE id = OLD.photo_id;
END;